//general scene variables

console.log((Math.random()*20).toFixed(0));

var scene,
	camera,
	renderer

var width = window.innerWidth;
var height = window.innerHeight;

var lineGroup,
	objectGroup;

var obj1;

var rotationSpeed = 0.001;

var random1,
	random2;
//variables for movable light

var mouseX = 0, mouseY = 0;

var container = document.getElementById( 'three-container' );

init();
animate();

function init() {
	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 50, window.innerWidth/ window.innerHeight, 1, 1000 );
	camera.position.z = 400;

	renderer = new THREE.WebGLRenderer({alpha:true});
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	// var cameraControls;


	// cameraControls = new THREE.OrbitControls(camera, renderer.domElement);
	// cameraControls.target.set( 0, 0, 0);
	// cameraControls.maxDistance = 400;
	// cameraControls.minDistance = 400;
	// cameraControls.update();

	objectGroup = new THREE.Group();

	var sphere = new THREE.SphereGeometry( 0.4, 16, 8 );

	var ambient = new THREE.AmbientLight( 0xffffff );
	scene.add( ambient );

	//orange
	light1 = new THREE.PointLight( 0xf4bd82, 1, 4500 );
	// light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xf4bd82 } ) ) );
	light1.position.set( 100, 0, 100 );
	// scene.add( light1 );

	var shape1 = new THREE.Shape();

	shape1.moveTo( 0, -2 );
	shape1.bezierCurveTo( 0, 0, 8, 4, 10, 6 );
	shape1.bezierCurveTo( 12, 8, 9, 8, 9, 8 );
	shape1.bezierCurveTo( 9, 8, 5, 9, 6, 12 );
	shape1.bezierCurveTo( 8, 14, 11, 15, 11, 14 );
	shape1.bezierCurveTo( 11, 14, 13, 11, 13, 11 );
	shape1.bezierCurveTo( 13, 11, 17, 14, 18, 14 );
	shape1.bezierCurveTo( 18, 14, 17, 10, 17, 11 );
	shape1.bezierCurveTo( 17, 10, 28, 10, 30, 9 );
	shape1.bezierCurveTo( 32, 8, 34, 0, 33, -3 );
	shape1.bezierCurveTo( 32, -8, 31, -5, 31, -5 );
	shape1.bezierCurveTo( 31, -3, 26, 5, 26, 4 );
	shape1.bezierCurveTo( 24, 7, 18, 3, 22, 1 );
	shape1.bezierCurveTo( 25, -2, 27, -5, 27, -5 );
	shape1.bezierCurveTo( 27, -5, 35, -14, 31, -20 );
	shape1.bezierCurveTo( 31, -20, 27, -27, 18, -27 );
	shape1.bezierCurveTo( 18, -27, 15, -27, 16, -26 );
	shape1.bezierCurveTo( 17, -25, 25, -13, 22, -9 );
	shape1.bezierCurveTo( 22, -9, 10, -8, 10, -19 );
	shape1.bezierCurveTo( 10, -19, 2, -18, -3, -21 );
	shape1.bezierCurveTo( -3, -21, -3, -5, 14, -2 );

	var extrudeSetting1 = { amount: 3, bevelEnabled: false};

	var geometry1 = new THREE.ExtrudeGeometry( shape1, extrudeSetting1 );

	geometry1.applyMatrix( new THREE.Matrix4().makeTranslation(-12, 0, 0) );

	mesh1 = new THREE.Mesh( geometry1, new THREE.MeshPhongMaterial( { color: 0xffffff } ) );

	mesh1.scale.set(3,3,3);
	mesh1.rotation.x = -0.3;
	mesh1.rotation.y = -0.3;
	mesh1.position.x = 110;
	mesh1.position.y = 100;
	mesh1.position.z = 100;

	objectGroup.add( mesh1 );

	var material = new THREE.LineBasicMaterial({color: 0xffffff});

	var geometry = new THREE.Geometry();
	geometry.vertices.push(
		new THREE.Vector3( -width/2,height/2,0 ),
		new THREE.Vector3( 0, 0, 0 )
	);

	lineGroup = new THREE.Group();
	scene.add(lineGroup);
	// lineGroup.rotation.x = 0.3;
	lineGroup.rotation.y = -0.3;
	lineGroup.rotation.z = -0.3;
	lineGroup.position.x = -130;
	lineGroup.position.y = -90;
	lineGroup.position.z = 120;

	lineGroup.scale.set(0.1,0.2,0.2);

	objectGroup.add( lineGroup );

	//loading c4d

	var manager = new THREE.LoadingManager();
	manager.onProgress = function ( item, loaded, total ) {

		console.log( item, loaded, total );

	};

	var texture = new THREE.Texture();

	var onProgress = function ( xhr ) {
		if ( xhr.lengthComputable ) {
			var percentComplete = xhr.loaded / xhr.total * 100;
			console.log( Math.round(percentComplete, 2) + '% downloaded' );
		}
	};

	var onError = function ( xhr ) {
	};

	var material = new THREE.MeshLambertMaterial( { map:THREE.ImageUtils.loadTexture('img/1.jpg') , side: THREE.DoubleSide} );

	var material2 = new THREE.MeshLambertMaterial( { color:0xFF0000, side: THREE.DoubleSide} );

	// model

	var loader = new THREE.OBJLoader( manager );
	loader.load( 'obj/test6.obj', function ( object ) {

		object.traverse( function ( child ) {

			if ( child instanceof THREE.Mesh ) {

				child.material = material;

			}

		} );

		object.position.x = -100;
		object.position.y = 30;
		object.position.z = -70;
		object.rotation.x = 0.7;
		object.scale.set(0.1,0.1,0.1);
		obj1 = object;
		objectGroup.add( obj1 );
		// obj1.applyMatrix( new THREE.Matrix4().makeTranslation(-12, 0, 0) );

	}, onProgress, onError );

	var loader2 = new THREE.OBJLoader( manager );
	loader.load( 'obj/test7.obj', function ( object ) {

		object.traverse( function ( child ) {

			if ( child instanceof THREE.Mesh ) {

				child.material = material2;

			}

		} );

		object.position.x = 80;
		object.position.y = -80;
		object.position.z = -80;
		object.rotation.y = -0.8;
		object.scale.set(0.3,0.3,0.3);
		objectGroup.add( object );

	}, onProgress, onError );

	scene.add(objectGroup);

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentMouseMove( event ) {

	var objLeft = $("#three-container").offset().left;
    var objTop = $("#three-container").offset().top;

    var objCenterX = objLeft + $("#three-container").width() / 2;
    var objCenterY = objTop + $("#three-container").height() / 2;
    mouseX = event.pageX - objCenterX;
	mouseY = -event.pageY + objCenterY;

	random1 = Math.floor(Math.random() * 400) - 400; 
	random2 = Math.floor(Math.random() * 400) - 400;

    console.log(mouseX);

	

	var material = new THREE.LineBasicMaterial({color: 0xffffff});

	var geometry = new THREE.Geometry();
	geometry.vertices.push(
		new THREE.Vector3( mouseX-10, mouseY-10, -50 ),
		new THREE.Vector3( mouseX, mouseY, 50 )
	);

	var line = new THREE.Line( geometry, material );
	lineGroup.add( line );

}

function animate() {

	requestAnimationFrame( animate );
	render();

}	

function render() {
	mesh1.rotation.y += 0.01;
	obj1.rotation.x -= 0.005;
	obj1.rotation.z -= 0.005;

	objectGroup.rotation.x -= 0.0005;
	objectGroup.rotation.y -= 0.0005;
	objectGroup.rotation.z -= 0.0005;
	// camera.rotation.y += 0.0005;
	renderer.render(scene, camera);
};
