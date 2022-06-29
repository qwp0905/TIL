module.exports=(req,res,next)=>{
  console.log('user hello')
  res.send('user api')
}
/**
 * @typedef User
 * @type {Object}
 * @param {string} name'
 * @param {number} age
 */