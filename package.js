Package.describe({
    summary: 'A Meteor.js / Blaze integration for bootstrap-tour',
    version: '1.1.1',
    name: 'defc0n1:bootstrap-tour',
    git: 'https://github.com/defc0n1/bootstrap-tour-1.git',
    documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');
    api.use(['jquery', 'templating'], 'client');

    // add dependency for bootstrap3
    api.addFiles([
        'lib/bootstrap-tour-standalone.js',
        'lib/bootstrap-tour-standalone.css'
        ], 'client');
});
