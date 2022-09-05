const API_ENDPOINT =  'https://crudcrud.com/api/b26210a0b46f4379a978d71992a56408/unicorns'

class API {
    get = async () => {
        const resp = await fetch(API_ENDPOINT)
        const data = await resp.json()
        return data
    }

    put = async (project) => {
        let id = project._id
        delete project._id
        console.log(project)
        const resp = await fetch(`${API_ENDPOINT}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
    }

    post = async (project) => {
        const resp = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        const content = await resp.json()
        console.log(resp)
    }

    delete = async (projectId) => {
         await fetch(`${API_ENDPOINT}/${projectId}`, {
            method: 'DELETE'
        })
    }
}

export const managerApi = new API()