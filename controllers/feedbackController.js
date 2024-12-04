const Interaction = require("../models/interaction");
const generateFeedback = require("../services/generateFeedback");




const getFeedback = async (req, res) => {
    try {
      const interactions = req.body.interactions;
      
      // Validate interactions
      if (!Array.isArray(interactions) || interactions.length === 0) {
        return res.status(400).json({ error: "Invalid or empty interactions provided." });
      }
      
      // Save interactions
      await Interaction.insertMany(interactions);
      
      // Generate feedback
      const feedback = await generateFeedback(interactions);
      res.status(200).json({ success: true, feedback });
    } catch (error) {
      console.error(error); // Add this to log full error details
      res.status(500).json({ success: false, error: error.message });
    }
 };

 module.exports = { getFeedback };