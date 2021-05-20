(function () {
    // Set our main variables
    let scene,
        renderer,
        camera,
        model,                              // Our character
        neck,                               // Reference to the neck bone in the skeleton
        waist,                               // Reference to the waist bone in the skeleton
        possibleAnims,                      // Animations found in our file
        mixer,                              // THREE.js animations mixer
        idle,                               // Idle, the default state our character returns to
        run,                                // run animation
        clock = new THREE.Clock(),          // Used for anims, which run to a clock instead of frame rate 
        currentlyAnimating = false,         // Used to check whether characters neck is being used in another anim
        raycaster = new THREE.Raycaster(),  // Used to detect the click on our character
        loaderAnim = document.getElementById('js-loader');




    init()




    function init() {


        // Base model Path
        const BASE_MODEL_PATH = './Models/'

        // Beerhead
        const BEERHEAD_PATH = BASE_MODEL_PATH + 'Characters/Beerhead/beerhead.glb'

        let loader = new THREE.GLTFLoader()

        loader.load(
            BEERHEAD_PATH,
            function (gltf) {
                model = gltf.scene
                let animations = gltf.animations
                model.traverse(o => {
                    if (o.isMesh) {
                        o.castShadow = true;
                        o.receiveShadow = true;
                    }
                });
                model.scale.set(7, 7, 7);
                model.position.y = -11;
                scene.add(model)
                loaderAnim.remove()
                mixer = new THREE.AnimationMixer(model)
                console.log(animations)
                // get the idle animation
                let idleAnim = THREE.AnimationClip.findByName(animations, 'Idle');
                let runAnim = THREE.AnimationClip.findByName(animations, 'Run');
                run = mixer.clipAction(runAnim)
                idle = mixer.clipAction(idleAnim);
                idle.play();

                document.addEventListener('keydown', () => { idle.stop(); run.play() })
                document.addEventListener('keyup', () => { run.stop(); idle.play(); })
            },
            undefined, // We don't need this function
            function (error) {
                console.error(error);
            }
        );

        const canvas = document.querySelector('#main-scene')

        // the scene to load anything necessary
        scene = new THREE.Scene();

        // Init the renderer
        renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.shadowMap.enabled = true;
        renderer.setPixelRatio(window.devicePixelRatio);
        document.body.appendChild(renderer.domElement);

        // Add a camera
        camera = new THREE.PerspectiveCamera(
            50,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 30
        camera.position.x = 0;
        camera.position.y = -3;

        // Add lights
        let hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.61);
        hemiLight.position.set(0, 50, 0);
        // Add hemisphere light to scene
        scene.add(hemiLight);

        let d = 8.25;
        let dirLight = new THREE.DirectionalLight(0xffffff, 0.54);
        dirLight.position.set(-8, 12, 8);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
        dirLight.shadow.camera.near = 0.1;
        dirLight.shadow.camera.far = 1500;
        dirLight.shadow.camera.left = d * -1;
        dirLight.shadow.camera.right = d;
        dirLight.shadow.camera.top = d;
        dirLight.shadow.camera.bottom = d * -1;
        // Add directional Light to scene
        scene.add(dirLight);

        // Floor
        let floorGeometry = new THREE.PlaneGeometry(5000, 5000, 1, 1);
        let floorMaterial = new THREE.MeshPhongMaterial({
            color: 0xeeeeee,
            shininess: 0,
        });

        let floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -0.5 * Math.PI; // This is 90 degrees by the way
        floor.receiveShadow = true;
        floor.position.y = -11;
        scene.add(floor);
    }

    // runs every frame and updates the scene
    function update() {
        if (mixer) {
            mixer.update(clock.getDelta());
        }
        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        renderer.render(scene, camera);
        requestAnimationFrame(update);
    }

    // keep everything proportional despite eventual resizes
    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        let width = window.innerWidth;
        let height = window.innerHeight;
        let canvasPixelWidth = canvas.width / window.devicePixelRatio;
        let canvasPixelHeight = canvas.height / window.devicePixelRatio;

        const needResize =
            canvasPixelWidth !== width || canvasPixelHeight !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }
    update();
})();