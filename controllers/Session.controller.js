const Session = require('../models/Session.model')

// Get All Programms
const allSessions = async (req, res) => {
    try {

        const sessions = await Session.find({belong: 'app'});
        res.status(200).json(sessions);

    } catch(err) {
        res.status(500).json(err);
        console.log('My error !!! ' + err);
    }
}

// Get All Programms
const userSessions = async (req, res) => {
    try {
        const userId = req.params.userId;
        const sessions = await Session.find({ belong: 'user' , user: userId});
        res.status(200).json(sessions);

    } catch(err) {
        res.status(500).json(err);
        console.log('My error !!! ' + err);
    }
}


// Add new Program
const addSession = async (req, res) => {
    try {
        const newSession = new Session(req.body);
        console.log(newSession);
        const session = await newSession.save();
        res.status(200).json(session);

    } catch(err) {
        res.status(500).json(err);
        console.log('My => '+ err);
    }
}

// Update Program
const updateSession = async (req, res) => {
    const targetedSession = await Session.findOne({ _id: req.params.id });
    try {
        if(targetedSession) {
            const session = await targetedSession.updateOne({ $set: req.body });
              res.status(200).json(session);
        }
      } catch (err) {
        res.status(500).json(err);
      }
}

// delete Program
const deleteSession = async (req, res) => {
    const targetedSession = await Session.findOne({ uuid: req.params.id });
    try {
        if(targetedSession) {
            const session = await targetedSession.deleteOne();
            res.status(500).json(session);
        }
    } catch(err) {
        res.status(500).json(err);
    }
}

const getAllExistingSessions = async (req, res) => {
    const allSessionsCount = await Session.count();
    res.json(allSessionsCount);

}

module.exports = {
    allSessions,
    userSessions,
    addSession,
    updateSession,
    deleteSession,
    getAllExistingSessions
}