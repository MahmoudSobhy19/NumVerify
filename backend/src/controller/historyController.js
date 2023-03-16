const axios = require("axios");
const History = require("../model/historyModel");

exports.searchForPhoneNumber = (req, res) => {
  axios
    .get(
      `https://api.apilayer.com/number_verification/validate?number=${req.params.number}`,
      {
        headers: {
          apikey: process.env.API_LAYER_KEY,
        },
      }
    )
    .then((respones) => {
      createHistoryFromSearch(respones.data);
      res.status(200).send(respones.data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Search Number failed!" + err,
      });
    });
};

exports.getHistory = (req, res) => {
  History.find()
    .sort({ createdAt: -1 })
    .then((History) => {
      res.status(200).send(History);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Fetching History failed!" + err,
      });
    });
};

exports.createHistory = (req, res) => {
  const history = new History({
    ...req.body,
  });

  history
    .save()
    .then((createdHistory) => {
      res.status(201).send({
        message: "History added successfully!",
        history: createdHistory,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Creating History failed!" + err,
      });
    });
};

const createHistoryFromSearch = (data) => {
  const history = new History({
    ...data,
  });

  history.save();
};
