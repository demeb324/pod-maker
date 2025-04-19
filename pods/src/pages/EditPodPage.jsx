import React from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import { useState, useEffect } from 'react';
import './PodListPage.css'; // Import the CSS file for styling

 
const EditPodPage = () => {
 
    const { id } = useParams();
    const [pods, setPods] = useState({ id: null, name: '', color: '', weapon: '' });
    
    useEffect(() => {
        const fetchPod = async () => {
            const { data, error } = await supabase
                .from('pod')
                .select('*')
                .eq('id', id)
                .single(); // Use .single() to get a single object
            
            if (error) {
                console.error('Error fetching pod:', error);
            } else if (data) {
                setPods(data);
            }
        };
        
        fetchPod();
    }, [id]); // Dependency array: fetch again if 'id' changes
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPods((prevPod) => ({ ...prevPod, [name]: value }));
    };
    
    const updatePod = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from('pod')
            .update({ name: pods.name, color: pods.color, weapon: pods.weapon }) // Update with an object
            .eq('id', id);
        if (error) {
            console.error('Error updating pod:', error);
        } else {
            console.log('Pod updated:', data);
            window.location = "/";
        }
    };

    const deletePod = async () => {
        const { data, error } = await supabase
            .from('pod')
            .delete()
            .eq('id', id);
        if (error) {
            console.error('Error deleting pod:', error);
        } else {
            console.log('Pod deleted:', data);
            window.location = "/";
        }
    };
    
    return (
        <div>
            <div className="header">
                <h1>Edit Pod</h1>
                <p>Update the details of the pod below.</p>
            </div>

            <div>
                <form onSubmit={updatePod}>
                    <label htmlFor="name">Name:</label> <br />
                    <input type="text" id="name" name="name" value={pods.name} onChange={handleChange} /><br />
                    <br />
                    
                    <label>Color:</label><br />
                    <div className="radio-group">
                    <label htmlFor="color-red">Red</label>
                    <input type="radio" id="color-red" name="color" value="Red" checked={pods.color === "Red"} onChange={handleChange} />
                    
                    <label htmlFor="color-green">Green</label>
                    <input type="radio" id="color-green" name="color" value="Green" checked={pods.color === "Green"} onChange={handleChange} />
                    
                    <label htmlFor="color-blue">Blue</label>
                    <input type="radio" id="color-blue" name="color" value="Blue" checked={pods.color === "Blue"} onChange={handleChange} />
                    
                    <label htmlFor="color-black">Black</label>
                    <input type="radio" id="color-black" name="color" value="Black" checked={pods.color === "Black"} onChange={handleChange} />
                    
                    <label htmlFor="color-white">White</label>
                    <input type="radio" id="color-white" name="color" value="White" checked={pods.color === "White"} onChange={handleChange} />
                    
                    <label htmlFor="color-purple">Purple</label>
                    <input type="radio" id="color-purple" name="color" value="Purple" checked={pods.color === "Purple"} onChange={handleChange} />
                    </div>
                    <br />
                    
                    <label>Weapon:</label><br />
                    <div className="radio-group">
                    <label htmlFor="weapon-gattling">Gatling</label>
                    <input type="radio" id="weapon-gattling" name="weapon" value="Gatling" checked={pods.weapon === "Gatling"} onChange={handleChange} />
                    
                    <label htmlFor="weapon-missiles">Missiles</label>
                    <input type="radio" id="weapon-missiles" name="weapon" value="Missiles" checked={pods.weapon === "Missiles"} onChange={handleChange} />
                    
                    <label htmlFor="weapon-laser">Laser</label>
                    <input type="radio" id="weapon-laser" name="weapon" value="Laser" checked={pods.weapon === "Laser"} onChange={handleChange} />
                    </div>
                    <br />
                    <input type="submit" value="Edit Pod!" />
                    <input type="button" value="Delete Pod" onClick={deletePod} /> {/* Added delete button */}
                </form>
            </div>
            <div className="footer">
                <p>&copy; 2023 Pod Maker. All rights reserved.</p>
            </div>
        </div>
    );
 };
 
 export default EditPodPage;