const express = require('express');
const cors = require('cors');
const knex = require('knex');
require('dotenv').config();

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
    },
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());

// GET: Fetch all testing from the database
app.get('/', (req, res) => {
    db.select('*')
        .from('testing')
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

// GET: Fetch table by tableId from the database
app.get('/:tableId', (req, res) => {
    const tableId = req.params.tableId;
    db.select('*')
        .from('testing')
        .where('table_id', '=', tableId)
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

// GET: Fetch table by createdBy from the database
app.get('/createdBy/:createdBy', (req, res) => {
    const createdBy = req.params.createdBy;
    db.select('*')
        .from('testing')
        .where('created_by', '=', createdBy)
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

// GET: Fetch table by createdBy from the database
app.get('/userId/:userId', (req, res) => {
    const userId = req.params.userId;
    db.select('*')
        .from('testing')
        .where('user_id', '=', userId)
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

// GET: Fetch table by createdBy from the database
app.get('/idNo/:idNo', (req, res) => {
    const idNo = req.params.idNo;
    db.select('*')
        .from('testing')
        .where('id_no', '=', idNo)
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

// POST: Create testing and add them to the database
app.post('/add-table ', (req, res) => {
    const { tableId, idNo, createdBy, userId} = req.body;
    db('testing')
        .insert({
            table_id: tableId,
            id_no: idNo,
            created_by: createdBy,
            user_id: userId,
        })
        .then(() => {
            console.log('table Added');
            return res.json({ msg: 'table Added' });
        })
        .catch((err) => {
            console.log(err);
        });
});

// DELETE: Delete table by tableId from the database
app.delete('/delete-table ', (req, res) => {
    const tableId = req.body;
    const tableIdToDelete = Number(tableId.tableId);
    console.log(tableIdToDelete);
    db('testing')
        .where('table_id', '=', tableIdToDelete)
        .del()
        .then(() => {
            console.log('table Deleted');
            return res.json({ msg: 'table Deleted' });
        })
        .catch((err) => {
            console.log(err);
        });
});

// PUT: Update table by tableId from the database
app.put('/update-table ', (req, res) => {
    db('testing')
        .where('table_id', '=', 1)
        .update({ user_id: 'sebastian' })
        .then(() => {
            console.log('table Updated');
            return res.json({ msg: 'table Updated' });
        })
        .catch((err) => {
            console.log(err);
        });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));