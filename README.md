# <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Laptop.webp" alt="Laptop" width="35" /> &nbsp; _Importing Models_ &nbsp; <img src="https://skillicons.dev/icons?i=threejs" height="35" alt="threejs logo"  />  

<!----------------------------------------- Description ---------------------------------------->
### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Bubbles.png" alt="Bubbles" width="40" height="40" />&nbsp; _Description_

> To begin with, it is important to note that, this project have been sourced from an exceptional `Three.js Journey` Course. <br/>
 
### 👤 Instructed by a _proficient_ and _expert educator_ <a href="https://threejs-journey.com/" target="_blank"> _"Bruno Simon"_ </a>.  

 <br/>

> ### Introduction to Models
 - Models are representations of 3D objects. These models can be complex shapes, characters, vehicles, environments, or any other objects you might want to include in a 3D scene.
 - Models are typically created using 3D modeling software such as Blender, Maya, or 3ds Max, and then exported in formats that Three.js can understand, here are some popular formats such as OBJ, FBX, STL, PLY, COLLADA, 3DS and GLTF.

<br/> 

> ### Lightest and Best for Performance
#### 1. `  GLTF  ` (GL Transmission Format) 
- _Performance_:  <br/>  " Excellent! " Designed to be compact and efficient for web use. Supports binary and JSON encoding, which allows for fast loading and minimal file sizes.
- _Realism_:  <br/> " Good! " Supports PBR (Physically-Based Rendering) materials, animations, and a range of other features.
  
#### 2. `  OBJ  ` (Wavefront Object) 
- _Performance_: <br/> " Good! " Simple format with relatively small file sizes, but can become large if the model has a lot of detail.
- _Realism_: <br/> " Moderate! " Does not support advanced materials or animations natively.
  
#### 3. `  STL  ` (Stereolithography) 
- _Performance_: <br/> " Good! " Commonly used for 3D printing, the files are typically simple and contain only geometry without textures or materials.
- _Realism_: <br/> " Low! " Only supports geometry (vertices, edges, and faces) without color or material information.

<br/> 

> ### Balanced Performance and Realism
#### 4. `  PLY  ` (Polygon File Format) 
- _Performance_: <br/> " Moderate! " Can store additional data like color and normal vectors, which increases file size.
- _Realism_: <br/> " Moderate! " Better support for vertex colors and more detailed geometric data than STL.

#### 5. `  COLLADA  ` (Collaborative Design Activity, .dae)
- _Performance_: <br/> " Moderate to high! " XML-based format can be quite verbose, leading to larger file sizes.
- _Realism_: <br/> " Good! " Supports animations, complex geometries, and various materials.

<br/> 

> ### Most Detailed and Good for Realism
#### 6. `  FBX  ` (Filmbox)
- _Performance_: <br/> " High! " Can result in larger file sizes due to its comprehensive support for complex scenes.
- _Realism_: " Excellent! " Supports a wide range of features including animations, rigging, textures, and advanced materials.


#### 7. `  3DS  ` (3D Studio)
- _Performance_: <br/> " High !" Generally larger file sizes due to its detailed representation of objects.
- _Realism_: <br/> " Good to Excellent! " Supports detailed geometry, textures, and materials, though somewhat outdated compared to FBX.

<br/> 

> ### Summary
- Lightest and Best for Performance: &nbsp;&nbsp; { GLTF, OBJ, STL }
- Balanced Performance and Realism: &nbsp;&nbsp;{ PLY, COLLADA }
- Most Detailed and Good for Realism: &nbsp;&nbsp;{ FBX, 3DS } <br/> <br/>
For web-based applications using Three.js, "GLTF" is often the best choice due to its balance between performance and realism. <br/> It is optimized for fast loading, compact file sizes, and good visual fidelity, making it ideal for modern web applications.

 <br/>

 
> ### GLTF
 - GLTF stands for ` GL Transmission Format `. <br/> It's made by the ` Khronos Group ` (the guys behind OpenGL, WebGL, Vulkan, Collada and with many members like AMD / ATI, Nvidia, Apple, id Software, Google, Nintendo, etc.)
 - It supports very different sets of data. You can obviously have data like the geometries and the materials but you can also have data like cameras, lights, scene graph, animations, skeletons, morphing and even multiple scene.
 - It also supports various file formats like json, binary, embed textures. <br/> <br/>
 - GLTF has become the standard when it comes to real-time. <br/> And because it's becoming a standard, most 3D softwares, game engines, and libraries support it. That means that you can easily have a similar result in different environments.

<br/> 

> ### Different formats of GLTF
### 1. _glTF (JSON)_
- `  Description :` <br/> This format uses a JSON file to describe the structure of the 3D model, including node hierarchies, materials, animations, and other metadata. The binary data for geometry (vertices, normals, etc.) and textures are stored in separate files.

- `  Why It Exists :` <br/> To provide a clear and human-readable way to describe 3D models, separating structural information from binary data.

- `  Differences :` <br/> The JSON file is separate from the binary data and textures, which are referenced by the JSON.

- `  Benefits :` <br/>
   - _Readability_ <br/> The JSON file is easy to read and edit manually if necessary.
   - _Modularity_ <br/> Allows for separate handling and updating of geometry, textures, and structure.
   - _Use Case_: <br/> When you need easy access to the structure and metadata of the model, or when the model data needs to be modular for updating specific components without re-uploading the entire model.

- ` Use Case :`
  - When you need easy access to the structure and metadata of the model, or when the model data needs to be modular for updating specific components without re-uploading the entire model. <br/><br/>


### 2. _glTF-Binary (GLB)_
- `  Description :` <br/> This format encapsulates all data (JSON, binary geometry, and textures) into a single binary file.

- `  Why It Exists :` <br/> To simplify asset management by consolidating all data into one file, which also improves loading performance by minimizing the number of file requests.

- `  Differences :` <br/> Combines JSON, binary data, and textures into a single file.

- `  Benefits :` <br/>
   - _Simplicity_: <br/> Easier to manage as a single file.
   - _Performance_: <br/> Faster loading times due to fewer HTTP requests.
   - _Use Case_: <br/> Ideal for web applications where minimizing the number of file requests is crucial for performance, and when asset management simplicity is preferred.

- ` Use Case :`
   - Ideal for web applications where minimizing the number of file requests is crucial for performance, and when asset management simplicity is preferred. <br/><br/>

### 3. _glTF-Embedded_
- `  Description :` <br/> Encodes all binary data (geometry, textures) directly within the JSON file using base64 encoding.

- `  Why It Exists :` <br/> To avoid dealing with multiple files while keeping the format in a single JSON file.

- `  Differences :` <br/> All data is embedded within the JSON file, leading to larger file sizes due to base64 encoding overhead.

- `  Benefits :`
   - _Single File_: <br/> All data is contained in one file, simplifying asset distribution.
   - _No Separate Assets_:  <br/> No need to manage multiple files for a single model.
   - _Use Case_: <br/> Useful when distributing models where having a single file is important, such as in emails or simple web pages where file management should be minimal.

- ` Use Case :`
  - Useful when distributing models where having a single file is important, such as in emails or simple web pages where file management should be minimal. <br/><br/>

### 4. _glTF-Draco_
- `  Description :` <br/> Uses Draco compression to significantly reduce the size of geometry data while maintaining the glTF format.

- `  Why It Exists :` <br/> To provide a means to reduce the file size of complex geometry, thus speeding up download times and saving bandwidth.

- `  Differences :` <br/> Compressed geometry data requires decompression during loading.

- `  Benefits :`
   - _Reduced File Size_: <br/> Significantly smaller files for complex models.
   - _Efficiency_: <br/> Lower download times and bandwidth usage.]

- `  Use Case :` <br/> Ideal for models with complex geometry where file size is a concern, especially in scenarios with limited bandwidth or where performance is critical. Note that this requires additional decompression time during loading. <br/><br/>


> ### _Summary and Recommendations_
- _glTF (JSON)_ : <br/> Best for readability and when modular handling of model components is needed. Use in scenarios where human-editable structure is beneficial.
- _glTF-Binary (GLB)_ : <br/> Best for overall performance and simplicity. Use for web applications where minimizing file requests and simplifying asset management are important.
- _glTF-Embedded_ :<br/> Best for situations where having a single file is crucial. Use in contexts where managing multiple files is not feasible.
- _glTF-Draco_ : <br/> Best for reducing file sizes of complex models. Use in performance-critical applications where download size is a limiting factor, keeping in mind the decompression overhead.


<br/><br/>

> ### Why We Need to Import Models
1. Complexity and Detail:
   - Creating complex 3D objects manually with code can be highly time-consuming and error-prone. <br/> Modeling software allows artists and developers to create intricate and detailed models that can then be imported into Three.js.

2. Efficiency:
   - Importing pre-made models saves a significant amount of development time. Instead of coding every vertex and face, developers can focus on integrating and animating these models within their scenes.

3. Quality and Realism:
   - Professional 3D modeling tools offer a wide range of features that help create high-quality and realistic models. <br/> These tools provide various techniques and materials that are difficult to replicate manually in Three.js.

<br/><br/>

<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Eyes.png" alt="Eyes" width="25" height="25" /> Feel free to delve into the code as it has been written in a straightforward manner for easy understanding.
<br/> <br/> 

> [!IMPORTANT]
>> ### Benefits of Using Models
>> 1. Enhanced Visuals :
>>    - High-quality models enhance the visual appeal of the 3D scenes, making them more engaging and realistic. 
>> 2. Consistency :
>>    - Using models ensures that complex objects maintain consistent geometry and texture, reducing the risk of visual errors.
>> 3. Reusability :
>>    - Once created, models can be reused across different projects, saving time and effort in the long run.
>> 4. Collaboration :
>>    - Artists and developers can work separately, with artists focusing on creating models and developers on programming the scene and interactions. <br/> This separation of concerns streamlines the workflow.
>> 5. Animation and Rigging :
>>    - Models can include animations and rigging, allowing for complex movements and interactions within the 3D scene. <br/> This is essential for creating lifelike characters and dynamic environments.

<br/><br/><br/>


<!-------- try it live -------->
#### _Give it a go in real-time and give me a Star_ &nbsp; <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Glowing%20Star.png" alt="Glowing Star" width="25"  /> <a href="https://models-importing-shahram.netlify.app/" target="_blank"> &nbsp; _Importing Models_ </a> 

<br/>

<!--------- Video --------->
<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Clapper%20Board.webp" alt="Clapper Board" width="35" /> &nbsp; 

https://github.com/ShahramShakiba/Models-p10/assets/110089830/594ae246-872e-485d-9afe-34c8d48c7cb8

  <br/> 

***

<!--======================= Social Media ===========================-->
 ## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Detective%20Light%20Skin%20Tone.png" alt="Man Detective Light Skin Tone" width="65" /> Find me around the Web  
<a href="https://www.linkedin.com/in/shahramshakiba/" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="52" height="40" alt="linkedin logo"  />
  </a> &nbsp;&nbsp;&nbsp;
  <a href="https://t.me/ShahramShakibaa" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/telegram/default.svg" width="52" height="40" alt="telegram logo"  />
  </a> &nbsp;&nbsp;&nbsp;
  <a href="https://wa.me/message/LM2IMM3ABZ7ZM1" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/whatsapp/default.svg" width="52" height="40" alt="whatsapp logo"  />
  </a> &nbsp;&nbsp;&nbsp;
  <a href="https://instagram.com/shahram.shakibaa?igshid=MzNlNGNkZWQ4Mg==" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/instagram/default.svg" width="52" height="40" alt="instagram logo"  />
  </a> &nbsp;&nbsp;&nbsp;
  <a href="https://twitter.com/ShahramShakibaa" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/twitter/default.svg" width="52" height="40" alt="twitter logo"  />
  </a>

<!--======================= 
> ### _Which Concepts Have I Covered_: <br/>

01. _<h4>.</h4>_
02. _<h4>.</h4>_
03. _<h4>.</h4>_
04. _<h4>.</h4>_
05. _<h4>.</h4>_
06. _<h4>.</h4>_
07. _<h4>.</h4>_
08. _<h4>.</h4>_
09. _<h4>.</h4>_
===========================-->
