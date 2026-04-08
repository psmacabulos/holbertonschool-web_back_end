#!/usr/bin/env python3
"""Module for element lengths."""


from typing import List, Tuple, Sequence, Iterable


def element_length(lst: Iterable[Sequence]) -> List[(Tuple[Sequence, int])]:
    """Method to return a list of tuples"""
    return [(i, len(i)) for i in lst]
