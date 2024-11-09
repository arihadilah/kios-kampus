export const userValidation = {
    name: {
        notEmpty: {
            errorMessage: "Name cannot be empty"
        },
        isString: {
            errorMessage: "Username must be a string"
        }
    },
    email: {
        notEmpty: {
            errorMessage: "Email is required"
        }
    },
    no_wa: {
        notEmpty: {
            errorMessage: "WhatsApp number is required"
        }
    },
    password: {
        notEmpty: {
            errorMessage: "Password is required"
        }
    }
}

export const productValidation = {
    product_name: {
        in: ['body'],
        isString: {
            errorMessage: "Product name must be a string"
        },
        notEmpty: {
            errorMessage: "Product Name is required"
        }
    }, 
    image: {
        custom: {
            options: (value, { req }) => {
                if (req.file) {
                    return true;
                } else {
                    throw new Error('Image is required');
                }
            }
        }
    },
    description: {
        in: ['body'],
        isString: {
            errorMessage: "Description must be a string"
        }
    },
    category: {
        in: ['body'],
        notEmpty: {
            errorMessage: "category is required"
        }
    },
    stock: {
        in: ['body'],
        isInt: {
            errorMessage: "Stock must be integer"
        },
        notEmpty: {
            errorMessage: "Stock is required"
        }
    },
    price: {
        in: ['body'],
        isFloat: {
            errorMessage: "Price must be a number"
        },
        notEmpty: {
            errorMessage: "Price is required"
        }
    },
    users_id : {
        in: ['body'],
        isInt: {
            errorMessage: "User Id must be integer"
        },
        notEmpty: {
            errorMessage: "User Id is required"
        }
    }
}