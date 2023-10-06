export const handleChange = (event, setter, data) => {
    const { name, value } = event.target;
    setter({ ...data, [name]: value });
};