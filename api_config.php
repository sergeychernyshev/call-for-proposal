<?php
require_once(dirname(__DIR__) . '/users/classes/API/Endpoint.php');
require_once(dirname(__DIR__) . '/users/classes/API/EndpointNameSpace.php');

$cfp_api_namespace = new \StartupAPI\API\EndpointNameSpace(
		'cfp', 'Call For Speakers API', 'Call For Speakers API Endpoints'
);

/**
 * API HTTP methods:
 * GET - to read data
 * PUT - to create an object
 * POST - update existing object
 * DELETE - delete existing object
 *
 * Use Advance REST Client Chrome extension to test:
 * https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo
 */
require_once(__DIR__ . '/classes/API/v1/Speaker/GetInfo.php');

\StartupAPI\API\Endpoint::register(
  $cfp_api_namespace, 'GET', new \CFP\API\v1\Speaker\GetInfo()
);
