// Step 1 - set up express & mongoose
  
var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
  
var fs = require('fs');
var path = require('path');
require('dotenv/config');