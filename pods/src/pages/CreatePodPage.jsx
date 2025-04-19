import React from 'react';
import { supabase } from '../client';
import { useState } from 'react';
import './CreatePodPage.css'; // Import the CSS file for styling

const CreatePodPage = () => {
    const [pods, setPods] = useState({ name: '', color: '', weapon: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPods((prevPods) => ({ ...prevPods, [name]: value }));
    };

    const createPod = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from('pod')
            .insert([
                { name: pods.name, color: pods.color, weapon: pods.weapon }
            ]);
        if (error) {
            console.error('Error creating pod:', error);
        } else {
            console.log('Pod created:', data);
            setPods({ name: '', color: '', weapon: '' });
            window.location = "/";
        }
    };

    return (
        <div>
            <div className="header">
                <h1>Create a New Pod</h1>
                <p>Fill in the details below to create a new pod.</p>
            </div>
            <div>
                <form onSubmit={createPod}> {/* Moved onSubmit to the form */}
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
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className="footer">
                <p>&copy; 2023 Pod Maker. All rights reserved.</p>
            </div>
        </div>
    );
};

export default CreatePodPage;