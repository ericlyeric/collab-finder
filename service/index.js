require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(
        cors({
            origin: process.env.CLIENT_URL,
        })
    );
    app.use(morgan('dev'));
}

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

// routes
// const router = require('route_path')

// app.use('route-name', router);

console.log(`Server running on PORT: ${process.env.PORT}`);

app.use((req, res, next) => {
    res.statusCode(404).json({
        success: false,
        message: 'Page not found',
    });
});

app.listen(port, function () {
    console.log(`Server started, listening at http://localhost${port}`);
});
