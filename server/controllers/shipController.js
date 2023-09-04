const Ship = require('../db/models');

exports.createShip = async (req, res) => {
    try {
        const ship = await Ship.create(req.body);
        res.status(201).json(ship);
    } catch (error) {
        res.status(500).json({ message: 'Error creating ship:', error });
    }
};

exports.getShips = async (req, res) => {
    try {
        const ships = await Ship.findAll();
        res.json(ships);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching ships:', error });
    }
};

exports.getShip = async (req, res) => {
    try {
        const ship = await Ship.findByPk(req.params.id);
        if (!ship) return res.status(404).json({ message: 'Ship not found' });
        res.json(ship);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching ship:', error });
    }
};

exports.updateShip = async (req, res) => {
    try {
        const ship = await Ship.findByPk(req.params.id);
        if (!ship) return res.status(404).json({ message: 'Ship not found' });
        await ship.update(req.body);
        res.json(ship);
    } catch (error) {
        res.status(500).json({ message: 'Error updating ship:', error });
    }
};

exports.deleteShip = async (req, res) => {
    try {
        const ship = await Ship.findByPk(req.params.id);
        if (!ship) return res.status(404).json({ message: 'Ship not found' });
        await ship.destroy();
        res.status(204).json({});
    } catch (error) {
        res.status(500).json({ message: 'Error deleting ship:', error });
    }
};