import * as db from '../database'
import bcrypt from "bcrypt-nodejs";

var moment = require('moment');
const express = require('express'); 
const app = express();

app.post('/hunter', (req, res) => {
    try {
        const {name, userName, apiKey } = req.body;

        if(apiKey === undefined || apiKey === null || apiKey === '') {
            return res.status(500).json();
        }
        if(apiKey !== "f5e92166-87d0-403e-b617-e4ada51a676d") {
            return res.status(500).json();
        }

        db.Hunter.create(
            {
                Name: name,
                CreatedOnUtc : moment()
            }
        ).then(() => {
            db.Superheroe.findOne({ where: { NameUser: userName }})
                .then(result => {
                    console.log(result);
                    if(result !== null) {
                        return res.status(400).json({
                            message: "error",
                            error: 'Nombre de usuario duplicado. La cuenta NO fue creada.',
                            response: ""
                        });
                    }

                    const Password= 'Neta12345+'
                    const salt = bcrypt.genSaltSync(10);
                    const hash = bcrypt.hashSync(Password, salt);
                    db.Superheroe.create(
                        {
                            Name1: name,
                            Name2: '',
                            LastName1: '',
                            LastName2: '',
                            Email: 'neta@default.mx',
                            NameUser: userName,
                            Password: hash,
                            Active:1,
                            RoleId:2,
                            CreatedAtUTC: moment()
                        }
                    );

                    res.status(200).json({
                        message: "success",
                        error: "",
                        response: {
                            name: name,
                            userName: userName,
                            password: Password
                        }
                    });            
                })
                .catch(err => {
                    console.log(err);
                    res.status(400).json(err);
                });    
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);    
        });

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});

module.exports = app; 