<template>
  <div class="q-py-md q-px-xl main">
    <div class="section">
      <div class="title text-weight-bold">组长</div>
      <div class="manage">
        <member :members="[owner]" />
        <!-- <q-space /> -->

        <q-btn
          outline
          class="manage-btn"
          :label="this.editMember ? '停止编辑' : '管理组员'"
          :color="this.editMember ? 'negative' : 'primary'"
          @click="edit"
          v-if="canManage"
        />
      </div>
    </div>

    <div class="section">
      <div class="title text-weight-bold">所有成员</div>

      <member
        :members="pagedAliveMember"
        :edit="editMember"
        @changeBlockStatus="changeBlockStatus"
      />
    </div>
    <div class="q-pa-md flex flex-center">
      <q-pagination
        v-model="currentPage"
        :max="maxPage"
        :max-pages="9"
        :boundary-numbers="true"
        :direction-links="true"
        color="primary"
      ></q-pagination>
      <span class="total">共{{ this.aliveMember.length }}人</span>
    </div>
    <div>
      <div class="title text-weight-bold">小黑屋</div>
      <member
        :members="blockMember"
        :edit="editMember"
        :blocked="true"
        @changeBlockStatus="changeBlockStatus"
      />
    </div>
  </div>
</template>

<script>
import member from 'components/member';
export default {
  components: {
    member,
  },
  props: { id: String },
  computed: {
    owner() {
      return this.$store.state.group.currentGroupOwner;
    },
    canManage() {
      return this.$store.state.group.currentGroupOwner.id === this.$store.state.user.userid;
    },
    maxPage() {
      return this.aliveMember.length && Math.floor(this.aliveMember.length / this.pageSize) + 1;
    },
    pagedAliveMember() {
      return this.aliveMember.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
  },
  data() {
    return {
      currentPage: 1,
      aliveMember: [],
      blockMember: [],
      editMember: false,
      pageSize: 30,
    };
  },
  created() {
    this.$store.dispatch('group/jumpToGroup', { id: this.id });
    this.getMembers(this.id);
  },
  methods: {
    async getMembers(id) {
      let url = '/user/members/' + id;
      const members = await this.$axios.get(url);
      if (members.data.code == 0) {
        this.aliveMember = members.data.data.alive;
        this.blockMember = members.data.data.blocked;

        // //test page
        // this.aliveMember.push(...this.aliveMember);
        // this.aliveMember.push(...this.aliveMember);
        // this.aliveMember.push(...this.aliveMember);
        // this.aliveMember.push(...this.aliveMember);
        // this.aliveMember.push(...this.aliveMember);
        // this.aliveMember.push(...this.aliveMember);
        // this.aliveMember.push(...this.aliveMember);
      }
    },
    changeBlockStatus({ userId, type }) {
      if (type === 'block') {
        let index = this.aliveMember.findIndex(member => member.id === userId);
        this.blockMember.push(this.aliveMember[index]);
        this.aliveMember.splice(index, 1);
      } else if (type === 'unblock') {
        let index = this.blockMember.findIndex(member => member.id === userId);
        this.aliveMember.push(this.blockMember[index]);
        this.blockMember.splice(index, 1);
      }
    },
    edit() {
      this.editMember = !this.editMember;
    },
  },
};
</script>

<style lang="stylus" scoped>
.manage {
  position: relative;

  .manage-btn {
    position: absolute;
    top: 35px;
    right: 30px;
  }
}

.total {
  color: $primary;
  padding-left: 15px;
}

.title {
  font-size: 16px;
  margin-bottom: 20px;
  padding-left: 10px;
}

.section {
  margin-bottom: 55px;

  /deep/ .main {
    margin: 20px;
  }
}
</style>
