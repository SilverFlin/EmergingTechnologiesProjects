const fs = require("fs");
const Account = require("../models/account");

const dataPath = "./data/accounts.json";

function getAllAccounts(req, res) {
  const accountData = readAccountFile();
  return res.status(200).json(accountData);
}

function getAccountById(req, res) {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  const accountData = readAccountFile();

  const account = accountData.find((account) => account.id === id);

  if (!account) {
    return res.status(404).json({ message: "Account not found" });
  }

  return res.status(200).json(account);
}

function createAccount(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing email or password" });
  }

  const accountData = readAccountFile();
  const newAccount = new Account(accountData.length + 1, email, password);
  accountData.push(newAccount);

  updateAccountFile(accountData);

  return res.status(201).json(newAccount);
}

function updateAccount(req, res) {
  const id = parseInt(req.params.id);
  const { email, password } = req.body;

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  const accountData = readAccountFile();

  const account = accountData.find((account) => account.id === id);

  if (!account) {
    return res.status(404).json({ message: "Account not found" });
  }

  const updatedAccount = new Account(id, email, password);

  const accountIndex = accountData.findIndex((account) => account.id === id);
  accountData[accountIndex] = updatedAccount;

  updateAccountFile(accountData);

  return res.status(200).json(updatedAccount);
}

function deleteAccount(req, res) {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  const accountData = readAccountFile();

  const account = accountData.find((account) => account.id === id);

  if (!account) {
    return res.status(404).json({ message: "Account not found" });
  }

  accountData.splice(accountData.indexOf(account), 1);

  updateAccountFile(accountData);

  return res.status(200).json(account);
}

function readAccountFile() {
  try {
    const accountData = JSON.parse(fs.readFileSync(dataPath));
    return accountData.accounts;
  } catch (err) {
    throw new Error(err);
  }
}

function updateAccountFile(accountData) {
  try {
    const newFile = { accounts: accountData };
    fs.writeFileSync(dataPath, JSON.stringify(newFile));
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  getAccountById,
  getAllAccounts,
  createAccount,
  updateAccount,
  deleteAccount,
};
