var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  var cohorts = [] // db.getCohorts()
  res.json(cohorts)
})

router.post('/', function (req, res) {
  var cohort = req.body
// db.saveCohort(cohort)
})

router.get('/:id', function (req, res) {
  var cohortId = req.params.id
  var cohort = {} // db.getCohort(cohortId)
})

router.put('/:id', function (req, res) {
  var cohortId = req.params.id
  var cohort = req.body
// db.saveCohort(cohort, cohortId)
})

router.get('/:id/students', function (req, res) {
  var cohortId = req.params.id
  var students = [] // db.getCohortStudents(cohortId)
  res.json(students)
})

router.post('/:id/students', function (req, res) {
  var cohortId = req.param.id
  var student = req.body
// db.saveCohortStudent(student, cohortId)
})

router.get('/:id/projects', function (req, res) {
  var cohortId = req.params.id
  var projects = [] // db.getCohortProjects(cohortId)
  res.json(projects)
})

router.post('/:id/projects', function (req, res) {
  var cohortId = req.params.id
  var project = req.body
// db.saveCohortProject(project, cohortId)
})

module.exports = router
