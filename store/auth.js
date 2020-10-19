export const actions = {
  /**
   * Check that the state change still has an authed user. If not
   * sign them out using the user/signOut action
   */
  async onStateChange({ dispatch }) {
    const { currentUser } = await this.$fireAuth

    if (!currentUser) {
      dispatch('user/signOut').then(() => {
        // @todo Do something here?
      })
    }
  },
}
