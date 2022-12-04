import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
    const diary = diaryServices.findById(+req.params.id)

    //res.send(diary?.weather)
    return (diary != null)
        ? res.send(diary)
        : res.sendStatus(404)
})

router.post('/', (req, res) => {

    try {
        const newDiaryEntry = toNewDiaryEntry(req.body)

        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
        res.json(addedDiaryEntry)
    } catch (e) {
        //TODO Debug ... send(e.message) 
        res.status(400).send("Error 400")
    }
})

export default router