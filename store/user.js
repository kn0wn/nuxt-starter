export const actions = {
  /**
   * Sign the user out, here you should perform mutations
   * such as removing the user from the store and redirecting
   * them to an auth screen
   */
  async signOut() {
    await this.$fireAuth
      .signOut()
      .then(() => {
        alert('Signed out')
      })
      .catch((err) => {
        throw new Error(err)
      })
  },
}
