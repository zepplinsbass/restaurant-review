if ('serviceWorker' in navigator) {

  const registerWorker = async function () {
    try {
      let result = await navigator.serviceWorker.register('./sw.js')
      console.log('Registration Worked!')
    } catch(e) {
      console.log('Registration Failed.')
    }
  }
  registerWorker()
}

