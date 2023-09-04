const FactionJoined = require('../db/models');

exports.createFaction = async (req, res) => {
    try {
        const faction = await FactionJoined.create(req.body);
        res.status(201).json(faction);
    } catch (error) {
        res.status(500).json({ message: 'Error creating faction:', error });
    }
};

exports.getFactions = async (req, res) => {
    try {
        const factions = await FactionJoined.findAll();
        res.json(factions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching factions:', error });
    }
};

exports.getFaction = async (req, res) => {
    try {
        const faction = await FactionJoined.findByPk(req.params.id);
        if (!faction) return res.status(404).json({ message: 'Faction not found' });
        res.json(faction);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching faction:', error });
    }
};

exports.updateFaction = async (req, res) => {
    try {
        const faction = await FactionJoined.findByPk(req.params.id);
        if (!faction) return res.status(404).json({ message: 'Faction not found' });
        await faction.update(req.body);
        res.json(faction);
    } catch (error) {
        res.status(500).json({ message: 'Error updating faction:', error });
    }
};

exports.deleteFaction = async (req, res) => {
    try {
        const faction = await FactionJoined.findByPk(req.params.id);
        if (!faction) return res.status(404).json({ message: 'Faction not found' });
        await faction.destroy();
        res.status(204).json({});
    } catch (error) {
        res.status(500).json({ message: 'Error deleting faction:', error });
    }
};