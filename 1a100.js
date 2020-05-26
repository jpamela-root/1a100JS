<script type="text/javascript">
var i;
for( i=1; i<=100; i++ ) {
var num3 = 3;
var num5 = 5;

bing = i%num3
bong = i%num5;

if(bing == 0) {
	document.write("bing");
}

if(bong == 0) {
	document.write("Bong");
}

if( bing != 0 && bong != 0 ) {
	document.write(i);
} 

document.write("<br />");

}
</script>