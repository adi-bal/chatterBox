const signup = (req, res) => {
    try {
        const {fullNume, username, password, phoneNumber} = req.body;
    } catch (error) {
        console.log(error);

        res.status(500).json({message: error})
    }
};

const login = (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);

        res.status(500).json({message: error})
    }
};


module.exports = {signup, login};