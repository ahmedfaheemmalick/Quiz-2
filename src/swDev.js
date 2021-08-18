const swDev = () => {
    let swDev = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swDev).then(result => {
        console.log('result', result)
    }).catch(error => {
        console.log('error', error)
    })
}

export default swDev