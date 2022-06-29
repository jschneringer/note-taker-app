const express = require ("express");
let [{ noteList, counter}] = require ("./db/db.json");
const PORT = process.env.PORT || 3001;
const path = require("path");
const fs = require("fs");
const app = express ();