const { get } = require("../routes/auth");
const { Cars } = require("../models/cars");

async function getAll(req, res) {
	try {
		const allCars = await Cars.findAll()
		
		res.status(200).json(allCars)
	} catch (err) {
		res.status(500).json({ message: `${err}` });
	}
}

async function createCar(req, res) {
	try {
		console.log(req.body)
		const {
			make,
			model,
			year,
			mileage,
			transmission,
			drivetrain,
			color,
			price,
		} = req.body;

		if (
			!make ||
			!model ||
			!year ||
			!mileage ||
			!transmission ||
			!drivetrain ||
			!color ||
			!price
		) {
			throw new Error("Please provide all necessary info")
		}

		const newCar = await Cars.create(req.body)
		console.log(newCar)

		res.status(201).json({
			message: "Car created",
			data: newCar
		})

	} catch (err) {
		console.error(err)
		res.status(500).json({ message: `${err}` });
	}
}

async function getFilter(req, res) {
	try {
		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: "Internal Server Error" });
	}
}

module.exports = { getAll, getFilter, createCar };
