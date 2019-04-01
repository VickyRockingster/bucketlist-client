const authEvents = require('./authentication/events.js')
const listItemsEvents = require('./list-items/events.js')

$(() => {
  $('#form-sign-up').on('submit', authEvents.onSignUp)
  $('#form-sign-in').on('submit', authEvents.onSignIn)
  $('#sign-up').hide()
  $('#bucket-list-page').hide()
  $('#go-to-sign-up-button').on('click', () => {
    $('#sign-in').hide()
    $('#sign-up').show()
  })
  $('#go-to-sign-in-button').on('click', () => {
    $('#sign-up').hide()
    $('#sign-in').show()
  })
  $('#btn-change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#form-create-list-items').on('submit', listItemsEvents.onCreateListItem)
  $('#get-list-items').on('submit', '.form-update', listItemsEvents.onUpdateListItem)
  $('#get-list-items').on('click', '.delete-button', listItemsEvents.onDeleteListItem)
  $('#get-list-items').on('click', '.list-title', listItemsEvents.showUpdateForm)
})
