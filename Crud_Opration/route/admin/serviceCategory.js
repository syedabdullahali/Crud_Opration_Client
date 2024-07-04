const express = require('express');
const ServiceCategory = require('../../model/admin/service_category');
const SubServiceCategory = require('../../model/admin/sub-service-category');

const router = express.Router()

// Define routes for service categories
router.get('/service-categories', async (req, res) => {
  const serviceCategories = await ServiceCategory.find().populate('subServiceCategories');
  res.json(serviceCategories);
});

router.post('/service-categories', async (req, res) => {
  const serviceCategory = new ServiceCategory(req.body);
  await serviceCategory.save();
  res.json(serviceCategory);
});

app.post('/sub-service-categories',async (req,res)=>{

    const {name,description,serviceCategoryId} = req.body

    try{
        const serviceCategory =  await ServiceCategory.findById(serviceCategoryId)

        if(!serviceCategory){
             res.status(404,{message:"Service category not found"})
        }

        const subServiceCategory = new SubServiceCategory({
            name,
            description,
            serviceCategoryId
        })

        const saveDoc =  await subServiceCategory.save()
        res.status(200,{message:"Service category save successfully",saveDoc})   

    }catch{
         res.status(500).json({message:error.message})
    }
})




module.exports = router
