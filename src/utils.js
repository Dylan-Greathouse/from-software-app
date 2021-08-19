const URL = 'https://quiet-headland-33493.herokuapp.com';

export const getVideogames = async () => {
    const resp = await fetch(`${URL}/videogames`);
    const data = await resp.json();
    return data;
};

export const getVideogame = async (id) => {
    const resp = await fetch(`${URL}/videogames/${id}`);
    const data = await resp.json();
    return data;
};

export const getSystems = async () => {
    const resp = await fetch(`${URL}/systems`);
    const data = await resp.json();
    return data;
};

export const updateVideogame = async (obj) => {
    const resp = await fetch(`${URL}/videogames/${obj.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    });
    const data = await resp.json();
    return data;
}

export const createVideogame = async (obj) => {
    const resp = await fetch(`${URL}/videogames/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    });
    const data = await resp.json();
    return data;
}