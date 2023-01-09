#!/usr/bin/python3
"""Defines an object attribute lookup function."""


def lookup(obj):
    """Returb a list if an oject's available attributes."""
    return (dir(obj))
