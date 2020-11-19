const mongoose = require('mongoose');
const Vocab = mongoose.model('Vocab');

export.list_all_words = (req, res) => {
    Vocab.find({},(err, words) =>{
        if (err) res.send(err);
        res.json(words);
    })
};

// { english: 'eraser', german: 'gummi'}
export.create_a_word = (req, res) => {
    const newWord = new Vocab(req.body);
    newWord.save((err, word) =>{
        if (err) res.send(err);
        res.json(word)
    })
};

export.read_a_word = (req, res) => {
    Vocab.findById( req.params.wordId,( err, word)=>{
     if (err) res.send(err);
     res.json(word);
    })
};

export.update_a_word = (req, res) => {
    Vocab.findAndUpdate(
        { _id: req.params.wordId },
        req.body,
        { new: true },
        (err, word) =>{
            if (err) res.send(err);
            res.json(word);
        }
    )
};

export.delete_a_word = (req, res) => {
    Vocab.deleteOne ( {_id: req.params.wordId} ,(err) =>{
        if (err) res.send(err);
        res.json({
            message: 'word deleted',
        _id: req.params.wordId
        })
    })

};
