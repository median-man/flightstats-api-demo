// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
const express = require('express');
const flightstats = require('./flightstats');

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================
const app = express();
const PORT = process.env.PORT || 3001;

// ==============================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request
// data from various URLs.
// ==============================================================================

// ==============================================================================
// LISTENER
// ==============================================================================
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
