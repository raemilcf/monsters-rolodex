//create a function to get the list of monsters 

//after : we put the type we are going to return  in this case is a promise 
//creating a generic -> receive a type T and return type T
export const getData= async <T>(url: string): Promise<T> => {

    const response = await fetch(url);
    return await response.json();

}