export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const contact = {
            first: data.get('first'),
            last: data.get('last'),
            email: data.get('email'),
            message: data.get('message')
        };
        return { success: true };
    }
};
