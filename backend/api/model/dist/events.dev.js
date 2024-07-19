"use strict";

var mongoose = require('mongoose');

var validator = require('validator');

var eventSchema = {
  title: {
    type: String,
    required: true,
    unique: true
  },
  alias: {
    type: String,
    required: false,
    unique: true
  },
  datetime_start: {
    type: Date,
    "default": Date.now
  },
  datetime_end: {
    type: Date,
    "default": Date.now
  },
  description: {
    type: String,
    required: true,
    Unique: true
  },
  prize: {
    type: Number,
    required: true
  },
  is_prize_to_all: {
    type: Number,
    required: true
  },
  rules: {
    type: Array,
    required: true
  },
  are_rules: {
    type: Number,
    required: true
  },
  coordinators: {
    type: String,
    required: true
  },
  winnerf: {
    type: String
  },
  winners: {
    type: String
  },
  winnert: {
    type: String
  },
  guest: {
    type: String
  },
  tagline: {
    type: String,
    required: true
  },
  place: {
    type: String
  },
  gallery: {
    type: String
  },
  other: {
    type: String
  },
  priority: {
    type: Number
  },
  timeline: {
    type: String
  },
  links: {
    type: String
  }
};
var Event = mongoose.model("Event", eventSchema);
module.exports = Event;