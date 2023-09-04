const VisitedPlanet = require('../db/models');

exports.createPlanet = async (req, res) => {
    try {
        const planet = await VisitedPlanet.create(req.body);
        res.status(201).json(planet);
    } catch (error) {
        res.status(500).json({ message: 'Error creating planet:', error });
    }
};

exports.getPlanets = async (req, res) => {
    try {
        const planets = await VisitedPlanet.findAll();
        res.json(planets);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching planets:', error });
    }
};

exports.getPlanet = async (req, res) => {
    try {
        const planet = await VisitedPlanet.findByPk(req.params.id);
        if (!planet) return res.status(404).json({ message: 'Planet not found' });
        res.json(planet);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching planet:', error });
    }
};

exports.updatePlanet = async (req, res) => {
    try {
        const planet = await VisitedPlanet.findByPk(req.params.id);
        if (!planet) return res.status(404).json({ message: 'Planet not found' });
        await planet.update(req.body);
        res.json(planet);
    } catch (error) {
        res.status(500).json({ message: 'Error updating planet:', error });
    }
};

exports.deletePlanet = async (req, res) => {
    try {
        const planet = await VisitedPlanet.findByPk(req.params.id);
        if (!planet) return res.status(404).json({ message: 'Planet not found' });
        await planet.destroy();
        res.status(204).json({});
    } catch (error) {
        res.status(500).json({ message: 'Error deleting planet:', error });
    }
};