<?php
namespace CFP\API\v1\Speaker;

/**
 * @package SpeakerForce\CFP
 * @subpackage API
 */
require_once(dirname(dirname(dirname(dirname(dirname(__DIR__))))) . '/users/classes/API/Endpoint.php');
require_once(dirname(dirname(dirname(dirname(dirname(__DIR__))))) . '/users/classes/API/Parameter.php');

/**
 * Gets speaker information
 *
 * @package SpeakerForce\CFP
 * @subpackage API
 */
class GetInfo extends \StartupAPI\API\AuthenticatedEndpoint {

	public function __construct() {
		parent::__construct('/v1/speaker', 'Get speaker information for current user');
	}

	public function call($values, $raw_request_body = null) {
		$user = parent::call($values);

    // do some creation of request
    $user_id = $user->getID();

		$speaker_info = [
			first_name => 'Sergey',
			last_name => 'Chernyshev'
		];

    // @TODO implement data retrieval $speaker_info = \Speaker::getByUserID($user_id);
		if (!$speaker_info) {
      throw new \StartupAPI\API\ObjectNotFoundException('User is not a speaker');
		}

		return array(
			'speaker' => $speaker_info
		);
	}
}
