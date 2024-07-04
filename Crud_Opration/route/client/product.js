const profuctSchema = require('../../model/admin/profuct')
const router = require('express').Router()

router.post('/create',async (req,res)=>{
try{
        const tempDoc = new  profuctSchema({...req.body})
        const saveDoc = await tempDoc.save()
        res.status(200).json({data:saveDoc,message:"Successfully saved"})

}catch(error){
res.status(500).json({error:error,message:"Something went wrong..."})
}
})




// Get All Admin Users with Search and Pagination
router.get('/all',async (req, res) => {
    try {
        const { name, page = 1, limit = 10 } = req.query;

        let query = {};
      
        if (name) {
            const regexPattern = new RegExp(name, 'i'); // Create case-insensitive regex pattern
            query.$or = [
                { name: { $regex: regexPattern } },
                { category: { $regex: regexPattern } }
            ];
        }

        // Calculate the total number of documents for pagination
        const totalDocuments = await profuctSchema.countDocuments(query);

        // Find users with pagination and search query
        const users = await profuctSchema.find(query)
            .skip((page - 1) * limit)
            .limit(parseInt(limit))
            .exec();

        res.status(200).json({
            data: users,
            currentPage: parseInt(page),
            totalPages: Math.ceil(totalDocuments / limit),
            totalDocuments,
            message: "Successfully fetched"
        });
    } catch (error) {
        res.status(500).json({ error: error.message, message: "Something went wrong..." });
    }
});
    

router.patch('/update/:id',async (req, res) => {
    try {
        const updateData = { ...req.body };
        const response = await profuctSchema.findByIdAndUpdate(req.params.id, updateData, { new: true });
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});


router.delete('/delete/:id',async (req, res) => {
    try {
        const response = await profuctSchema.findByIdAndDelete(req.params.id);
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})



module.exports = router;


