//index(listagem), show(listagemunica), store(criar sessão), 
//update(alterar sessão), destroy(remover sessão), login, logout
const User = require('../models/User')
module.exports = {
  async store(req,res){
    const { email } = req.body;
    //const user = await User.create({ email })
    let user = await User.findOne({ email })
    if(!user){
      user = await User.create({ email })
    }
    return res.json(user)
  }
};