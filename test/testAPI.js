import {MikroNode} from '../src/index';

let device = new MikroNode(/* Host */'127.0.0.1' /* , Port */ /* , Timeout */);
// device.setDebug(api.DEBUG);

// connect:
device.connect().then(([login]) => login('usrename', 'password')).then(function (conn) {
  let c1 = conn.openChannel();
  console.log('Getting Packages');
  c1.write('/system/package/getall');
  c1.data // get only data here
    .subscribe(function (data) { // feeds in one result line at a time.
      console.log('Data Packet:');
      console.log(JSON.stringify(data.data, true, 2));
    });
}, function (err) {
  console.log('Error connecting:', err);
});
