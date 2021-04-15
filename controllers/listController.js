const List = require('../models/list');


const list_index = (req, res) =>{
    List.find().sort({createdAt: -1})
        .then((result) =>{
            res.render('index', {title:'All Lists', lists: result});
        })
        .catch((err) =>{
            console.log(err);
        })
}

const list_details = (req, res) =>{
    const id = req.params.id;
    List.findById(id)
        .then((result) =>{
            res.render('details', {lists: result, title: 'List Details'});
        })
        .catch((err) =>{
            res.render('404', {title: '404'});
        });    
}

const list_create_get = (req, res) =>{
    res.render('create', {title : "Create a New List"});
}

const list_create_post = (req, res) =>{
    const list = new List(req.body);

    list.save()
        .then((result) =>{
            res.redirect('/lists');
        })
        .catch((err) =>{
            console.log(err);
        });
}

const list_new_video =(req, res) =>{
    const id = req.params.id;
    const videoembed = req.body.videoembed;

    List.findByIdAndUpdate(id, { "$push": {videoembed: videoembed}}, {new: true})
        .then(result =>{
            res.redirect('/lists/'+id);
        })
        .catch(err =>{
            console.log(err);
        });
}

const list_delete = (req, res) =>{
    const id = req.params.id;

    List.findByIdAndDelete(id)
        .then(result =>{
            res.json({redirect: '/lists'});
        })
        .catch(err =>{
            console.log(err);
        });
}

module.exports={
    list_index,
    list_details,
    list_create_get,
    list_create_post,
    list_new_video,
    list_delete
}