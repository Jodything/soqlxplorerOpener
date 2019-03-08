var execSync = require('child_process').execSync;
var userName = process.argv[2];
if (!userName) {
	return console.error('No userName argument specified');
}

var getUserData = 'sfdx force:user:display --targetusername ' + userName + ' --json';

var options = {
	encoding: 'utf8'
};
// execSynce('sfdx force:org:open')
var userData = execSync(getUserData, options).toString();

function executeOrder66(data) {
	var url = data.result.loginUrl.replace('https:', '');
	var soqlUrl = "'soqlx:" + url + "/sid/" + data.result.accessToken + "'";
	console.log('Opening SoqlXplorer');
	execSync('open ' + soqlUrl);
}

executeOrder66(JSON.parse(userData));
// open 'soqlx://CS22.salesforce.com/sid/00D170000000roI!AQMAQJkoMoWFhpfPR.Wvw2mrScci5GFkWcDOFGXo7BARZDEJ1mFG0QS7CXGQAwaWnIcPXJaSRu9jMKTwHO9eONyG1K_UD6R_'
