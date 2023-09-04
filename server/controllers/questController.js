const Quest = require('../db/models');

exports.createQuest = async (req, res) => {
    try {
        const quest = await Quest.create(req.body);
        res.status(201).json(quest);
    } catch (error) {
        res.status(500).json({ message: 'Error creating quest:', error });
    }
};

exports.getQuests = async (req, res) => {
    try {
        const quests = await Quest.findAll();
        res.json(quests);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching quests:', error });
    }
};

exports.getQuest = async (req, res) => {
    try {
        const quest = await Quest.findByPk(req.params.id);
        if (!quest) return res.status(404).json({ message: 'Quest not found' });
        res.json(quest);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching quest:', error });
    }
};

exports.updateQuest = async (req, res) => {
    try {
        const quest = await Quest.findByPk(req.params.id);
        if (!quest) return res.status(404).json({ message: 'Quest not found' });
        await quest.update(req.body);
        res.json(quest);
    } catch (error) {
        res.status(500).json({ message: 'Error updating quest:', error });
    }
};

exports.deleteQuest = async (req, res) => {
    try {
        const quest = await Quest.findByPk(req.params.id);
        if (!quest) return res.status(404).json({ message: 'Quest not found' });
        await quest.destroy();
        res.status(204).json({});
    } catch (error) {
        res.status(500).json({ message: 'Error deleting quest:', error });
    }
};