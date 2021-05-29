import React from 'react'
import { motion } from 'framer-motion';

const Week = () => {
    const week = [
        "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
    ]

    const [weekChecked, setweekChecked] = React.useState({ week: [] })

    const addTopping = (topping) => {
        let newToppings;
        if (!weekChecked.week.includes(topping)) {
            newToppings = [...weekChecked.week, topping];
            console.log(newToppings)
        } else {
            newToppings = weekChecked.week.filter(item => item !== topping);
            console.log(newToppings)

        }
        setweekChecked({ ...weekChecked, week: newToppings });
    }

    // const addTopping = (topping) => {
    //     let newToppings;
    //     if (!weekChecked.includes(topping)) {
    //         newToppings = [...weekChecked, topping];
    //     } else {
    //         newToppings = weekChecked.filter(item => item !== topping);
    //     }
    //     setweekChecked({ ...weekChecked, newToppings });
    // }

    console.log(weekChecked, week)

    return (
        <React.Fragment>
            <React.StrictMode>
                <div className="flex flex-row cursor-pointer text-4xl ">
                    {
                        week.map((a, i) => {
                            let spanClass = weekChecked.week.includes(a) ? 'bg-blue-300' : '';
                            console.log(spanClass, weekChecked.week.includes(week))
                            return (
                                <motion.div key={i} className={`p-2  ${spanClass} `} onClick={() => addTopping(a)}
                                    whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    {a}
                                </motion.div>
                            )
                        }
                        )
                    }

                </div>
            </React.StrictMode>
        </React.Fragment>
    )
}

export default Week
