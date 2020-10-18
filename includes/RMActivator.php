<?php

namespace Inc;

/**
 * This class is used for an activation of the plugin.
 */
class RMActivator
{
	public static function activate()
	{
		# Refresh all permalinks
		flush_rewrite_rules();
	} // ACTIVATE
} // RMACTIVATOR
